/**
 * Created by liguohua on 16/10/10.
 */
var this003;
(function (this003) {
    /**
     * 可以看到createCardPicker是个函数，并且它又返回了一个函数。 如果我们尝试运行这个程序，会发现它并没有弹出对话框而是报错了。
     * 因为 createCardPicker返回的函数里的this被设置成了window而不是deck对象。 因为我们只是独立的调用了 cardPicker()。
     * 顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window）。
     */
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                //此处this是调用值window
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.info("card: " + pickedCard.card + " of " + pickedCard.suit);
})(this003 || (this003 = {}));
//# sourceMappingURL=this003.js.map