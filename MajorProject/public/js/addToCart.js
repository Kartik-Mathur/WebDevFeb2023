let productsList = document.querySelector('.productsList');

productsList.addEventListener('click', async (ev) => {
    if (ev.target.classList.contains('addToCart')) {
        let productId = ev.target.getAttribute('productId');

        console.log(productId);
        try {
            let data = await axios.get(`/shop/addToCart?productId=${productId}`);
            console.log(data);
            let cartCount = document.querySelector('.cartCount');
            cartCount.innerText = data.data.cartCount;
            console.log(cartCount);
            let sideView = document.querySelector('.sideView');
            sideView.classList.toggle('showCart');
            
        } catch (err) {
            console.log(err)
        }
    }

})


