# PremiumCalculation

Premium calculator has built with .Net5 and Angular.

Two components has been created in Angular client app.

1: Calculator with funcitonality to perform calculation client side in typescript code.

2: Calculator API with functionality to proform calculation by calling Api service Get request on "https://localhost:5001/api/PremiumCalculation/{occupaiton}/{insuredSum}/{age}"
   example: "https://localhost:5001/api/PremiumCalculation/Doctor/50000/44"

Validation has been done in reactive form and with creating custom directives 

*****Testing steps*****
--Client application--

1: Run Command prompt 
2: Navigate to TAL_PremiumCalculation/client/src/app 
3: Run  command  "npm start"
4: application start running on "http://localhost:4200/"

--API application--
1: Run new instance of command prompt
2: Navigate to TAL_PremiumCalculation\API
3: Run command "dotnet run watch"
4: API application strats running on "https://localhost:5001/"


*****Following are Technical components used building application*****

SDK: VS Code


API: .Net5


Client Application

Angular: 12.1.0
TypeScript: 4.3.2
Node Version: 14.17.1
NPM Version: 6.14.8
ngx-bootstap: 7.0.0
font-awesome: 4.7.0


