function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;
        this.partial();
        if (!this.fullText.includes(this.cloze)) {
            console.error("Error: Cloze deletion not found in input text. Please try again!")
        }
    } else {
        return new ClozeCard(text, cloze);
    }
}

ClozeCard.prototype.partial = function() {
    this.partial = this.fullText.replace(this.cloze, "...");
};

module.exports = ClozeCard;