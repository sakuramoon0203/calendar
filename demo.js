var today=new Date(),
		curYear=today.getFullYear(),
		curMonth=today.getMonth()+1,
		curDate=today.getDate();
		y=curYear,
		m=curMonth,
		d=curDate;

		var lastYearNode=document.querySelector(".lastYear"),
		lastMonthNode=document.querySelector(".lastMonth"),
		nextYearNode=document.querySelector(".nextYear"),
		nextMonthNode=document.querySelector(".nextMonth"),
		yearNode=document.querySelector(".yearSelect"),
		monthNode=document.querySelector(".monthSelect");

		console.log(monthNode);
		console.log(yearNode);

		(function init(){
			var table=document.createElement("table");
			table.setAttribute("cellspacing","0");
			var thead=document.createElement("thead");
			var tr=document.createElement("tr");
			tr.innerHTML=("<td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td><td>日</td>");
			thead.appendChild(tr);
			table.appendChild(thead);
			var calendar=document.querySelector(".calendar");
			calendar.appendChild(table);
			var tbody=document.createElement("tbody");
			table.appendChild(tbody);
		})();

		function createCalendar(year,month){	
			document.getElementsByTagName("tbody")[0].innerHTML="";		
			var lastMonth;
			if(month==1){
				lastMonth=12;
			}else{
				lastMonth=month-1;
			}
			firstDay=new Date(year,month-1,1),
			dayOfWeek=firstDay.getDay(),
			days_per_month=new Array(31,28+isLeap(year),31,30,31,30,31,31,30,31,30,31),

			console.log(y,m,d);
			console.log(firstDay);
			console.log(dayOfWeek);
			// console.log(str_nums);

			for(var i=0;i<6;i++){
				var trb=document.createElement("tr");
				console.log(i);
				for(j=0;j<7;j++){
					var td=document.createElement("td");
					var index=i*7+j;
					var date;
					if(dayOfWeek==0){
						date=index-(dayOfWeek+7)+2;
					}else{
						date=index-dayOfWeek+2;
					}
					var text;
					if(date<=0){
						text=document.createTextNode((days_per_month[lastMonth-1]+date).toString());
						td.className="otherMonth";
					}else if(date>days_per_month[month-1]){
						text=document.createTextNode((date-days_per_month[month-1]).toString());
						td.className="otherMonth";
					}else{
						text=document.createTextNode(date);
					}
					td.appendChild(text);
					if(date == curDate && year == curYear && month == curMonth){
						td.className="current";
					}
					trb.appendChild(td);
				}
				document.getElementsByTagName("tbody")[0].appendChild(trb);
			}
		};

		function isLeap(year){
			return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 ==0 ? 1 :0 )) :0 ;
		}	

		createCalendar(y,m);
		console.log(y,m,d);	

		lastYearNode.addEventListener("click",subYear,false);
		function subYear(){
			y--;
			yearNode.value=y;
			createCalendar(y,m);
		}

		lastMonthNode.addEventListener("click",subMonth,false);
		function subMonth(){
			if(m==1){
				m=12;
				y--;
				yearNode.value=y;
			}else{
				m--;
			}
			createCalendar(y,m);
			monthNode.value=m;
		}

		nextYearNode.addEventListener("click",addYear,false);
		function addYear(){
			y++;
			createCalendar(y,m);
			yearNode.value=y;
		}

		nextMonthNode.addEventListener("click",addMonth,false);
		function addMonth(){
			if(m==12){
				m=1;
				y++;
				yearNode.value=y;
			}else{
				m++;
			}
			createCalendar(y,m);
			monthNode.value=m;
		}

		var yearSelcet=document.querySelector(".yearSelect"),
		monthSelcet=document.querySelector(".monthSelect");

		yearSelcet.onchange=function changeYear(){
			y=yearSelcet.value;
			createCalendar(y,m);
		}

		monthSelcet.onchange=function changeMonth(){
			m=monthSelcet.value;
			createCalendar(y,m);
		}