describe('carService', function () {
    describe('isItExpensive', function () {
        it('If issue is Engine"', () => {
            expect(carService.isItExpensive('Engine'))
                .to.be.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('If issue is Transmission', () => {
            expect(carService.isItExpensive('Transmission'))
                .to.be.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('If issue is anything else', () => {
            expect(carService.isItExpensive('a'))
                .to.equal(`The overall price will be a bit cheaper`);
        });
        it('If issue is Transmission to not answer cheaper', () => {
            expect(carService.isItExpensive('a'))
                .to.not.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('discount', function () {
        it('Parts is string', () => {
            expect(() => carService.discount("a", 100))
                .to.throw("Invalid input");
        });
        it('Total price is string', () => {
            expect(() => carService.discount(100, "a"))
                .to.throw("Invalid input");
        });
        it('Discount should be 15', () => {
            expect(carService.discount(3, 100))
                .to.equal('Discount applied! You saved 15$');
        });
        it('Discount should be 15', () => {
            expect(carService.discount(7, 100))
                .to.equal('Discount applied! You saved 15$');
        });
        it('Discount cant be applied', () => {
            expect(carService.discount(2, 100))
                .to.equal('You cannot apply a discount');
        });
        it('Discount should be 30', () => {
            expect(carService.discount(8, 100))
                .to.equal('Discount applied! You saved 30$');
        });
    });

    describe('partsToBuy ', function () {
        it('Everything works ', () => {
            expect(carService.partsToBuy([], ["coil springs"]))
                .to.equal(0);

            expect(carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }],
                ["coil springs"]))
                .to.equal(230);
        });
        it('Catalog doenst countaint the part needed ', () => {
            expect(() => carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }]))
                .to.throw(0);
            expect(() => carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }], 0))
                .to.throw(0);
            expect(() => carService.partsToBuy('blow off', { part: "coil springs", price: 230 }))
                .to.throw("Invalid input");
            expect(() => carService.partsToBuy('blow off', 'coil springs')
                .to.throw("Invalid input"));

        });
        it('Throws error when input is wrong ', () => {
            expect(() => carService.discount([], 100))
                .to.throw("Invalid input");
            expect(() => carService.discount(4, {}))
                .to.throw("Invalid input");
        });
    });
});