const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

document.getElementById('addChapterButton').addEventListener('click', () => {
  const input = document.getElementById('chapterInput');
  if (input.value.trim() !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = item;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.addEventListener('click', () => {
    deleteChapter(item);
  });

  li.appendChild(deleteButton);
  ul.appendChild(li);
}

function setChapterList() {
  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
  const storedChapters = localStorage.getItem('chapters');
  return storedChapters ? JSON.parse(storedChapters) : [];
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove the ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
  document.querySelector('ul').innerHTML = ''; // Clear the current list
  chaptersArray.forEach(chapter => displayList(chapter)); // Rebuild the list
}
