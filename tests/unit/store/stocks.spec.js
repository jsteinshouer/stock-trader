import stocks from '@/store/stocks';

describe('store/stocks.js', () => {

    describe('mutations.endDay', () => {

        it('should randomly change the stock prices', () => {

            stocks.state.stocks = [
                { name: "Google", price: 100 },
                { name: "Apple", price: 100 },
                { name: "Twitter", price: 100 }
            ];

            stocks.mutations.endDay(stocks.state);

            stocks.state.stocks.forEach( (item) => {
                expect(item.price).not.toBe(100);
            });
        });


    });
});