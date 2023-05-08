// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False





function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // Convert date strings to Date objects
    const today = new Date(currentDate);
    const expiration = new Date(expirationDate);
  
    // Check if entered code and correct code match, and if the coupon is not expired
    return enteredCode === correctCode && today <= expiration;
  }
  