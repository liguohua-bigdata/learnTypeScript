/**
 * Created by liguohua on 16/10/10.
 */
var this005;
(function (this005) {
    var _this = this;
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: , this: Deck }, _a = (void 0).return,  = _a === void 0 ? function () {
        var pickedCard = Math.floor(Math.random() * 52);
        var pickedSuit = Math.floor(pickedCard / 13);
        return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
    } : _a;
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);
})(this005 || (this005 = {}));
//# sourceMappingURL=this005.js.map