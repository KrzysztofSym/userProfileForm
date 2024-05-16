const female = document.querySelector(".female");
const male = document.querySelector(".male");


document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('[data-dropdown-button]');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdown = this.closest('[data-dropdown]');
            dropdown.classList.toggle('active');
        });
    });

    // const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    // dropdownMenus.forEach(menu => {
    //     const dropdownItems = menu.querySelectorAll('li');
    //     dropdownItems.forEach(item => {
    //         item.addEventListener('click', function() {
    //             const dropdown = this.closest('[data-dropdown]');
    //             const dropdownButton = dropdown.querySelector('[data-dropdown-button] a');
    //             dropdownItems.forEach(item => {
    //                 item.classList.remove('active');
    //             });
    //             this.classList.add('active');
    //             dropdownButton.textContent = this.textContent;
    //             dropdown.classList.remove('active');
    //             if (brown.classList.contains("active")) {
    //                 body.classList.add('brown')};
    //             if (blue.classList.contains("active")) {
    //                 body.classList.add('blue')};
    //             if (premium.classList.contains("active")) {
    //                 body.classList.add('premium')};
    //                 console.log("ok");
              
    //         });
    //     });
    // });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('[data-dropdown]')) {
            document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

const numberInputs = document.querySelectorAll('.numberInput');

// Loop through each input element and add an event listener
numberInputs.forEach(function(input) {
    input.addEventListener('blur', function() {
        enforceMinMax(this);
    });
});


function enforceMinMax(el) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }

