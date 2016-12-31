


			//form validation function	
			var svalidation = false;
			var fvalidation = false;
			var ivalidation = false;
		
			function inputValidation()
			{
				var inputGood = true;

				if(svalidation == false)
				{
					alert("Please choose the Muffin size to order");
					inputGood = false;
				}
			
				if(fvalidation == false)
				{
					alert("Please choose the Flavour");
					inputGood = false;
				}
			
				if(ivalidation == false)
				{
					alert("Please choose the Topping");
					inputGood = false;
				}
				
				

				if(document.muffinForm.customername.value == "")
				{
					alert("You must enter your name");
					inputGood = false;
				}
				else
				{
					var custN = cusNameCheck();
					if(custN == false)
					{
					  return false;
					}
				}
	
				if(document.muffinForm.phonenum.value == "")
				{
					alert("Please enter your Phone Number");
					    inputGood = false;
				}
				else
				{
					var custP = phoneCheck();
					if(custP == false)
					{
						return false;
					}
				}
				
				if(document.muffinForm.creditcard.value == "")
				{
					alert("Please enter your Credit Card");
						inputGood = false;
				}
				else
				{
					var custC = cardCheck();
					if(custC == false)
					{
						return false;
					}
				}
				
				if(document.muffinForm.ppsnumber.value == "")
				{
					alert("Please enter your PPS number");
						inputGood = false;
				}
				else
				{
					var cPPS = PPSCheck();
					if(cPPS == false)
					{
						return false;
					}
				}
				
				return inputGood;
			}		
	
		
		//Displaing muffing size
		function muffinSize()
		{
			if (document.getElementById('regular').checked)
			{
				document.getElementById('muffin').style.visibility="visible";
				document.getElementById('muffin').style.width="130px";
				document.getElementById('muffin').style.height="130px";
			}
			
			if (document.getElementById('large').checked)
			{
				document.getElementById('muffin').style.visibility="visible";
				document.getElementById('muffin').style.width="200px";
				document.getElementById('muffin').style.height="200px";
			}
			return true;
		}					

		
		//Muffin size choice
			function sizeChoice()
			{		
				var muffinSize = 0;
	
				var schoice = document.getElementsByName("muf");
				for(i = 0; i < schoice.length; i++)
				{
					if(schoice[i].checked)
					{
						muffinSize = Number(schoice[i].value);
					}
				}
				return muffinSize;
			}

		
		//Muffing flavour calculation
			function flavour()
			{		
				var muffinPrice = 0;
				var	large = .50;
				
				var fchoice = document.getElementsByName("flav");
				for(i = 0; i < fchoice.length; i++)
				{
					if(fchoice[i].checked)
					{
						muffinPrice = Number(fchoice[i].value);
						if((muffinPrice == 2) && (document.getElementById('large').checked))
						{ 
							muffinPrice = Number(muffinPrice) +  Number(large);
						}
					}
				}
				return muffinPrice;
			}
			
		
		//Icing price calculation
			function icingTopping()
			{		
				var icingPrice = 0;
				var largeIcing = .20;
				var noneIcing = 0;
				
				var ichoice = document.getElementsByName("ice");
				for(i = 0; i < ichoice.length; i++)
				{
					if(ichoice[i].checked)
					{
						icingPrice = Number(ichoice[i].value);
						if(icingPrice == 0 && document.getElementById('large').checked)
						{ 
							icingPrice = Number(icingPrice) +  Number(noneIcing);
						}
						if(icingPrice != 0 && document.getElementById('large').checked)
						{
							icingPrice = Number(icingPrice) +  Number(largeIcing);
						}
					}
				}
				return icingPrice;
			}
		
		
		//Getting sprinkles Price
			function sprinkTopping()
			{		
				var sprinPrice = 0;
				
				var schoice = document.getElementsByTagName("input");
					
				for(var i = 0; i < schoice.length; i++) 
				{
					if(schoice[i].type == "checkbox" && schoice[i].checked) 
					{
						 sprinPrice += Number(schoice[i].value);
					}  
				}
				return sprinPrice;
			}

		
			//Calculating and Displaying the number
			function getPrice()
			{
				var price = sizeChoice() + flavour() + icingTopping() + sprinkTopping();
				
				var paid = document.getElementById('sumPrice');
				paid.style.display='block';
				paid.innerHTML = "Total Price &euro;" + price;
			}
		
	
			function clearPrice()
			{
				var makeClear = document.getElementById('sumPrice').innerHTML = 0.0;
				var sf = document.getElementById('sprink').disable(true);
			}
		
	
		
		//Getting muffin size	
		function muffinSize()
		{
			if (document.getElementById('regular').checked)
			{
				document.getElementById('muffin').style.visibility="visible";
				document.getElementById('muffin').style.width="130px";
				document.getElementById('muffin').style.height="130px";
			}
			
			if (document.getElementById('large').checked)
			{
				document.getElementById('muffin').style.visibility="visible";
				document.getElementById('muffin').style.width="150px";
				document.getElementById('muffin').style.height="150px";
			}
			
		}			
	

		//Customer Name validation
			function cusNameCheck()
			{
				var custName;
				var nameGood = new Boolean(true);
				
				custName=document.forms['muffinForm']['customername'].value;

				
				if(!(isNaN(custName) || custName.length > 6))
				{
					nameGood = false;
				}
				
				if(custName.indexOf(' ') == 0 || custName.lastIndexOf(' ') == custName.length-1)
				{
					nameGood = false;
				}
				
				if(!(custName.indexOf(' ') == custName.lastIndexOf(' ')))
				{
					nameGood = false;
				}
				
				if(nameGood)
				{
					document.getElementById('cusname').style.background='none';
					return nameGood;

				}
				else
				{
					alert("Customer Name Is not a valid"); 
					document.getElementById('cusname').style.background='red';
					return false;
				}                                                  
				
				return nameGood;
			}

		
		//Phone number validation
			function phoneCheck()
			{
				var phoneNumber; 
				var phoneGood = new Boolean (true);
			
				phoneNumber=document.forms['muffinForm']['phonenum'].value;
				
				if ((phoneNumber == null) || (phoneNumber == ""))
				{
					phoneGood = false;
				}
				
				if(!((phoneNumber.length == 10) || (phoneNumber.length == 12)))
				{
					phoneGood = false;
				}
				
				if((phoneNumber.length == 12)&&(phoneNumber.charAt(0)!="(")&&(phoneNumber.charAt(4)!=")")&&(phoneNumber.charAt(3)!="-")&&(phoneNumber.charAt(7)!="-"))
				{
					phoneGood = false;
				}
				
				if((phoneNumber.length == 12)&&(phoneNumber.charAt(0)=="(")&&(phoneNumber.charAt(4)==")"))
				{
					phoneNumber = phoneNumber.substring(1,4) + phoneNumber.substring(5,12);
				}
				
				if((phoneNumber.length == 12) && (phoneNumber.charAt(3)=="-") && (phoneNumber.charAt(7)=="-"))
				{
					phoneNumber = phoneNumber.substring(0,3) + phoneNumber.substring(4,7) + phoneNumber.substring(8,12);
				}
				
				var check = phoneNumber.substring(0,3);
				if(!((check == "021") || (check == "083") || (check == "085") || (check == "086") || (check == "087") || (check == "089")))
				{
					phoneGood = false;
				}
			
				for(x=3; x < 10; x++)
				{
					check = phoneNumber.slice(x, x+1);
					if((check < "0") || (check > "9"))
					phoneGood = false;
				}
		
				if(!phoneGood)
				{
					alert("Is not a valid phone Number");
					document.getElementById('cusphone').style.background='red';
					return false;
				}
				else
				{
					document.getElementById('cusphone').style.background='none';
					return phoneGood;
				}
				return phoneGood;
			}

		
		//Credit card validation
			function cardCheck()
			{
				var CardNum; 
				var cardGood = new Boolean (true);
				
			    var total = 0;
				var count = 0;
				var odd = 0;
	
				cardNum=document.forms['muffinForm']['creditcard'].value;
				
				if ((cardNum == null) || (cardNum == ""))
				{
					cardGood = false;
				}
			
				if(cardNum.length != 16)
				{
					cardGood = false;
				}
				if ( cardNum.charAt(0) == "4" && cardNum.length == 16)
				{
					 alert("Visa Card");
				}
				
				else if(cardNum.charAt(0) =="5" && cardNum.length == 16)
				{
					alert("Master Card");
				}
			
				if(cardNum.substring(0,4) == "6011" && cardNum.length == 16)
				{
					alert("Discover Card");
				}
			
				var check = parseInt(cardNum.substring(15,16));
				
				if(isNaN(cardNum))
				{
					cardGood = false;
				
				}
				
				for(var i = cardNum.length-2; i >= 0; i--)
				{
					count++;
					if(count % 2 == 1)
					{
						odd = cardNum[i] * 2;
						if(odd > 9)
						{
							odd -= 9;
						}
						total = total + odd;
					}
					else
					{
						total = total + Number(cardNum[i]);
					}
				}
	
	/*
				if(total == 0) 
				{
					alert("Credit Card Is Bad");
					document.getElementById('cuscard').style.background='red';
					cardGood = false;
				}*/
				
				if(!((total != 0) && (total + check % 10 != 0 )))
				{
					alert("Credit Card Is Bad");
					document.getElementById('cuscard').style.background='red';
					return false;
				}
				else
				{
					document.getElementById('cuscard').style.background='none';
					return cardGood;	
				}
				
				return cardGood;
			}
		
		
		//PPS Number validation
			function PPSCheck()
			{ 
			
				var PPSNum;	
				var ppsGood = new Boolean(true);
				var multiplingChar = 8;
			
				PPSNum=document.forms['muffinForm']['ppsnumber'].value;
		
				if((PPSNum == null) || (PPSNum == ""))
				{
					ppsGood = false;
				}
		
				if(PPSNum.length != 8)
				{
					ppsGood = false;
				}
		
				var number = PPSNum.substring(0,7);
				var letter = PPSNum.substring(7,8);
		
				if(isNaN(number))
				{
					ppsGood = false;
				}
		
				if(!isNaN(letter))
				{
					ppsGood = false;
				}
			
				PPSNum = PPSNum.toUpperCase();
				letter = PPSNum.charCodeAt(7);
				letter = letter - 64;

				var sum = 0;
				for (var i = 0; i < number.length; i++)
				{
					sum+= number[i] * multiplingChar--;
				}
			
				if(letter == 23)
				{
					letter = 0;
				}
			
				if(sum % 23 != letter)
				{
					alert("Bad PPS Num");
					document.getElementById('cuspps').style.background='red';
					return false;
				}
				else
				{
					document.getElementById('cuspps').style.background='none';
					return ppsGood;
				}
				return ppsGood;
			}
		