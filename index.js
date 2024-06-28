
      // 🚨 Get input values

      document.addEventListener('DOMContentLoaded', (event) => {
        const submitButton = document.getElementById('submitButton');
        const certificateContentElement = document.getElementById('certificateContent');
        const modal = document.getElementById('modal');
        
        const closeButton = document.querySelector('.close');
      
    submitButton.addEventListener('click', function(event) {
          // Prevent default form submission
          event.preventDefault();
         

          const studentNameInput = document.getElementById('studentName');
          const personalMessageInput =document.getElementById(`personalMessage`) ;
          const courseNameInput = document.getElementById(`courseName`); 
  
          const studentName = studentNameInput.value.trim();
          const personalMessage = personalMessageInput.value.trim();
          const courseName = courseNameInput ? courseNameInput.value.trim() : "a course";
  
          if (studentName.trim() === '' || personalMessage.trim() === '') {
              alert('Please fill in all fields');
              return;
      }
       // 🚨 Generate certificate content dynamically
         
        document.getElementById('studentNamePlaceholder').innerText = studentName;
        document.getElementById('courseNamePlaceholder').innerText = courseName;
        document.getElementById('personalMessagePlaceholder').innerText = personalMessage;
      
        //  Display the modal
          modal.style.display = 'flex';
         
      // Clear the form inputs
          studentNameInput.value = '';
          personalMessageInput.value = '';
          courseNameInput.value = '';
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';

});
     
  });
     
    
