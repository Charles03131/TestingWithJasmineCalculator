
it('should calculate the monthly rate correctly',function() {
  const values={
    amount:50000,
    years:8,
    rate:5.8
  
  };
  expect(calculateMonthlyPayment(values)).toEqual('652.21')
});


it('should return a result with 2 decimal places', function() {
  const values={
    amount:500,
    years:2,
    rate:5.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('22.00')
});


it('should handle small scale loans',function(){
 
  const values={
    amount:10,
    years:1,
    rate:2

  };
expect(calculateMonthlyPayment(values)).toEqual('0.84')
});


it("should handle large scale loans",function(){
  const values={
    amount:500000,
    years:30,
    rate:80
  };
expect(calculateMonthlyPayment(values)).toEqual('33333.33')
});
