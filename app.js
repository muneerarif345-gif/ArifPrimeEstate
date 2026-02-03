const priceFilter = document.getElementById("priceFilter");
const properties = document.querySelectorAll(".property");

priceFilter.addEventListener("change", () => {
    const maxPrice = priceFilter.value;

    properties.forEach(property => {
        const price = parseInt(property.dataset.price);

        if (maxPrice === "all" || price <= maxPrice) {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }
    });
});
