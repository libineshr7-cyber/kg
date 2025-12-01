// Show form after payment confirmation
document.getElementById("paidBtn").addEventListener("click", function() {
    document.getElementById("form-section").style.display = "block";
});

// Handle form submission
document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        pid: document.getElementById("pid").value
    };

    // Replace with your Google Script URL
    fetch("https://script.google.com/macros/s/AKfycbwOH4Iafl0tPFtXBMWDp5jQxvzA65Ds_GRkK-b7_XfBv5yaFX2vKfyVZJTLdy6a34_N9w/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    });

    document.getElementById("successMsg").style.display = "block";
    document.getElementById("regForm").reset();
});
