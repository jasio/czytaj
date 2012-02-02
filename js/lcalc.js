var tangle = new Tangle (document.getElementById("lcalc"), {
    initialize: function () {
        this.lwzrost = 175;
        this.lstronynaksiazke = 400;
        this.lksiazki = 87;
    },
    update: function () {
        this.lstrony = this.lksiazki * this.lstronynaksiazke / 365;
        this.lksiazki = this.lwzrost / 2;
    }
});