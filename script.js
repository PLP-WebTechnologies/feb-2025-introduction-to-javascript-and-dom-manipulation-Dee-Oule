// Dynamically change the text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("title").textContent = "Text Changed Dynamically!";
  });
  
  // Modify CSS styles dynamically
  document.getElementById("description").classList.add("dynamic-style");
  
  // Add or remove an element
  document.getElementById("toggleElementBtn").addEventListener("click", () => {
    const dynamicElement = document.getElementById("dynamicElement");
  
    if (dynamicElement.innerHTML === "") {
      dynamicElement.innerHTML = "<p>This element has been added!</p>";
    } else {
      dynamicElement.innerHTML = "";
    }
  });
  