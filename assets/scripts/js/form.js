   
      // declaration  of  variables
      let input = document.querySelectorAll("input,textarea");
      const nameInfo = document.getElementById("name");
      const ageInfo = document.getElementById("age");
      const emailInfo = document.getElementById("email");
      const phoneInfo = document.getElementById("phone");
      const feedbackInfos = document.getElementById("feedback");
      let genderInfo;

      //validation  of  input
      document.querySelectorAll("input,textarea").forEach((el) => {
        el.addEventListener("input", () => {
          if (el.id === "name") {
            validateName(el.value);
          } else if (el.id === "age") {
            validateAge(el.value);
          } else if (el.id === "email") {
            validateEmail(el.value);
          } else if (el.id === "phone") {
            validatePhone(el.value);
          } else if (el.name === "gender") {
            validateGender(el.value);
          } else if (el.id === "feedback") {
            validateFeedback(el.value);
          }
        });
      });

      // validate name
      function validateName(name) {
        const namePattern = /^[a-zA-Z ]{2,30}$/;
        if (!namePattern.test(name) || name.trim() === "") {
          nameInfo.style.boxShadow = "1px 1px 8px  #b510107a";
          nameInfo.style.border = ".7px solid #b510107a";
          return false;
        } else {
          nameInfo.style.boxShadow = "0 0 0 .2rem #28a74533";
          nameInfo.style.border = "1px solid #3fef0a";
          return true;
        }
      }
      // validate age
      function validateAge(age) {
        const agePattern = /^(1[01][0-9]|[1-9]?[0-9])$/;
        if (!agePattern.test(age) || age.trim() === "") {
          ageInfo.style.boxShadow = "1px 1px 8px  #b510107a";
          ageInfo.style.border = ".7px solid #b510107a";
          return false;
        } else {
          ageInfo.style.boxShadow = "0 0 0 .2rem #28a74533";
          ageInfo.style.border = "1px solid #3fef0a";
          return true;
        }
      }
      // validate email
      function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "" || !emailPattern.test(email)) {
          emailInfo.style.boxShadow = "1px 1px 8px  #b510107a";
          emailInfo.style.border = ".7px solid #b510107a";
          return false;
        } else {
          emailInfo.style.boxShadow = "0 0 0 .2rem #28a74533";
          emailInfo.style.border = "1px solid #3fef0a";
          return true;
        }
      }
      // validate phone
      function validatePhone(phone) {
        const phonePattern = /^\d+$/; // Basic phone pattern
        if (!phonePattern.test(phone) || phone.trim() === "") {
          phoneInfo.style.boxShadow = "1px 1px 8px  #b510107a";
          phoneInfo.style.border = ".7px solid #b510107a";
          return false;
        } else {
          phoneInfo.style.boxShadow = "0 0 0 .2rem #28a74533";
          phoneInfo.style.border = "1px solid #3fef0a";
          return true;
        }
      }
      //validation gender
      function validateGender() {
        const maleChecked = document.getElementById("male").checked;
        const femaleChecked = document.getElementById("female").checked;

        if (!maleChecked && !femaleChecked) {
          return false;
        }
        return true;
      }

      // validate feedback
      
      function validateFeedback(feedback) {
        const feedbackPattern = /^[a-zA-Z]$/;
        if ( feedbackInfos.value.trim() === "" || feedbackPattern.test(feedback)) {
          feedbackInfos.style.boxShadow = "1px 1px 8px  #b510107a";
          feedbackInfos.style.border = ".7px solid #b510107a";
          return false;
        } else {
          feedbackInfos.style.boxShadow = "0 0 0 .2rem #28a74533";
          feedbackInfos.style.border = "1px solid #3fef0a";
          return true;
        }    
      }
      // show
      function showSection(sectionNumber) {
        document
          .querySelectorAll(".section")
          .forEach((section) => section.classList.add("d-none"));
        document
          .getElementById("section" + sectionNumber)
          .classList.remove("d-none");
       
      }
      // next
      function nextSection(sectionNumber) {
        let isValid = false;

        switch (sectionNumber) {
          case 2:
            isValid =
              validateName(nameInfo.value) && validateAge(ageInfo.value);
            console.log(isValid);
            break;
          case 3:
            isValid =
              validateEmail(emailInfo.value) &&
              validatePhone(phoneInfo.value) &&
              validateGender();
            break;
          
        }

        if (isValid) {
          showSection(sectionNumber);
        } else {
          alert("Please fill in all the required fields correctly.");
        }
      }
      // prev
      function prevSection(sectionNumber) {
        showSection(sectionNumber);
      }
      //  submit
      function submitForm(event) {
        event.preventDefault();
          document.getElementById("name-info").innerHTML = nameInfo.value;
          document.getElementById("age-info").innerHTML = ageInfo.value;
          document.getElementById("email-info").innerHTML = emailInfo.value;
          document.getElementById("phone-info").innerHTML = phoneInfo.value;
          document.getElementById("feedback-info").innerHTML =
            feedbackInfos.value;
          if (document.getElementById("male").checked) {
            genderInfo = "Male";
          } else if (document.getElementById("female").checked) {
            genderInfo = "Female";
          } else {
            genderInfo = "not specific";
          }
          document.getElementById("gender-info").innerHTML = genderInfo;
        if ( validateFeedback()) {
           showSection(4);

        } else {
          alert("not working.");
        }
      }
      //reset the inputs styles
      function resetInputStyles() {
        input.forEach((el) => {
          el.style.boxShadow = "";
          el.style.border = "";
        });
      }
      // confirmation
      function confirmation() {
        resetInputStyles();
        document.getElementById("multiSectionForm").reset();
        showSection(1);
      }
   