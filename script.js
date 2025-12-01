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
    fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    });

    document.getElementById("successMsg").style.display = "block";
    document.getElementById("regForm").reset();
});
