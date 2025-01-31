 function createNote() {
        const stickyNotes = document.querySelector('.sticky-notes');
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('note-container');

        const noteContent = document.createElement('div');
        noteContent.classList.add('note-content');
        noteContent.contentEditable = true;
        noteContent.textContent = '';

        const noteActions = document.createElement('div');
        noteActions.classList.add('note-actions');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-note');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
          noteContainer.remove();
        };

        const speakButton = document.createElement('button');
        speakButton.classList.add('speak-note');
        speakButton.textContent = 'Speak';
        speakButton.onclick = function () {
          speakNote(speakButton);
        };

        noteActions.appendChild(deleteButton);
        noteActions.appendChild(speakButton);
        noteContainer.appendChild(noteContent);
        noteContainer.appendChild(noteActions);
        stickyNotes.appendChild(noteContainer);
      }

      function deleteNote(button) {
        const noteContainer = button.closest('.note-container');
        noteContainer.remove();
      }

      function speakNote(button) {
        const noteContent = button.closest('.note-container').querySelector('.note-content').textContent;
        const utterance = new SpeechSynthesisUtterance(noteContent);
        window.speechSynthesis.speak(utterance);
      }

  
 
