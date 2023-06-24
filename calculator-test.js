
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })).toContain("103.64");
});


it("should return a result with 2 decimal places", function() {
  let num = calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 });
  expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })).toBeCloseTo(num, 2);
});

