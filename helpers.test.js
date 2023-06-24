describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });
    
      it("Should sum all of the payments and tips", function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
      })

      it("Should calculate the tip percentage", function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        expect(calculateTipPercent(billAmtInput.value, tipAmtInput.value)).toEqual(20);
      })
    
      it ("Should append a new table row element", function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      })

      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
})
