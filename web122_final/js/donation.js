// Gana Sehaki 07/17/2025

 let selectedAmount = 100;
  let donationFrequency = 'monthly';

  window.selectAmount = function (amount, element) {
    selectedAmount = amount;

    const currentContainer = donationFrequency === 'monthly'
      ? document.getElementById('monthly-amounts')
      : document.getElementById('onetime-amounts');

    currentContainer.querySelectorAll('.amount-btn').forEach(btn => {
      btn.classList.remove('selected');
    });

    currentContainer.querySelectorAll('.amount-input-custom').forEach(input => {
      input.value = '';
    });

    element.classList.add('selected');
    updateDonateButton();
  };

  window.toggleFrequency = function (frequency, element) {
    donationFrequency = frequency;

    document.querySelectorAll('.frequency-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    const monthly = document.getElementById('monthly-amounts');
    const onetime = document.getElementById('onetime-amounts');
    const title = document.getElementById('donationTitle');

    if (frequency === 'monthly') {
      monthly.classList.remove('hidden');
      onetime.classList.add('hidden');
      title.textContent = "Choose an amount to donate Monthly";
      selectedAmount = 100;
      resetAmountButtons(monthly, 100);
    } else {
      onetime.classList.remove('hidden');
      monthly.classList.add('hidden');
      title.textContent = "Choose an amount to donate One-time";
      selectedAmount = 100;
      resetAmountButtons(onetime, 100);
    }

    updateDonateButton();
  };

  function resetAmountButtons(container, defaultValue) {
    container.querySelectorAll('.amount-btn').forEach(btn => {
      const value = parseInt(btn.textContent.replace('$', ''));
      btn.classList.remove('selected');
      if (value === defaultValue) {
        btn.classList.add('selected');
      }

      btn.onclick = function () {
        selectAmount(value, btn);
      };
    });

    container.querySelectorAll('.amount-input-custom').forEach(input => {
      input.value = '';
      input.classList.remove("selected");
    });
  }

  function updateDonateButton() {
    const donateBtn = document.querySelector('.donate-btn') || document.querySelector('.btn-ctn button');
    const label = donationFrequency === 'monthly' ? 'Monthly' : 'One-time';
    if (donateBtn) {
      donateBtn.textContent = `Continue - ${label} $${selectedAmount}`;
    }
  }

  // Custom input logic
  document.querySelectorAll(".amount-input-custom").forEach(input => {
    input.addEventListener("input", () => {
      const val = parseInt(input.value);
      if (!isNaN(val) && val > 0) {
        selectedAmount = val;

        const container = donationFrequency === 'monthly'
          ? document.getElementById('monthly-amounts')
          : document.getElementById('onetime-amounts');

        container.querySelectorAll('.amount-btn').forEach(btn => {
          btn.classList.remove('selected');
        });

        updateDonateButton();
      }
    });

    input.addEventListener("focus", () => {
      input.classList.add("selected");
    });
  });



  // Affichage formulaire
  const continueBtn = document.getElementById("continueBtn");
  const donationForm = document.getElementById("donationForm");
  const donationAside = document.querySelector(".donation-form");

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      if (donationAside && donationForm) {
        donationAside.remove();
        donationForm.style.display = "block";
        donationForm.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const backArrow = document.getElementById("backToAside");
  if (backArrow) {
    backArrow.addEventListener("click", () => {
      location.reload(); // simple reset
    });
  }
  //affichage payment form
  const goToPaymentBtn = document.getElementById("goToPayment");
  const paymentForm = document.getElementById("paymentForm");
  const backToDonationBtn = document.getElementById("backToDonation");

  if (goToPaymentBtn && paymentForm && donationForm) {
    goToPaymentBtn.addEventListener("click", (e) => {
      e.preventDefault();
      donationForm.style.display = "none";
      paymentForm.style.display = "block";
      paymentForm.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (backToDonationBtn && paymentForm && donationForm) {
    backToDonationBtn.addEventListener("click", (e) => {
      e.preventDefault();
      paymentForm.style.display = "none";
      donationForm.style.display = "block";
      donationForm.scrollIntoView({ behavior: "smooth" });
    });
  }

  // faq questions 
    document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const questionBtn = item.querySelector(".faq-question");

      questionBtn.addEventListener("click", () => {
        // Close all items except the one clicked
        faqItems.forEach((el) => {
          if (el !== item) {
            el.classList.remove("active");
          }
        });

        // Toggle active state on the clicked item
        item.classList.toggle("active");
      });
    });
  });

  // Initialisation par défaut
  toggleFrequency('monthly', document.querySelector('.frequency-btn.active') || document.querySelector('.frequency-btn'));