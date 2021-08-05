
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
   
    public class PremiumCalculationController:BaseApiController
    {


        [HttpGet("{occupation}/{sumInsured}/{age}")]
        public double PremiumCalculateByUser(string  occupation, double sumInsured,int age)
        {
            double occupationRatingFactor = 0.0;

            switch (occupation)
            {
                case "Cleaner":
                case "Florist":
                    occupationRatingFactor = 1.50;
                    break;
                case "Doctor":
                    occupationRatingFactor = 1.00;
                    break;
                case "Author":
                    occupationRatingFactor = 1.25;
                    break;
                case "Farmer":
                case "Mechanic":
                    occupationRatingFactor = 1.75;
                    break;

                default:
                    occupationRatingFactor = 0.00;
                    break;
            }

            var deathPremium = (sumInsured * occupationRatingFactor * age) / 1000 * 12;

            return deathPremium;

        }
    }
}