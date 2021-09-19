const url = location.href;
ss.value = "Цюрих" 

document.querySelector('input[name="checkin_year"]').value = "2021"
document.querySelector('input[name="checkin_month"]').value = "10"
document.querySelector('select[name="checkin_monthday"]').value = "2"

document.querySelector('input[name="checkout_year"]').value = "2021"
document.querySelector('input[name="checkout_month"]').value = "10"
document.querySelector('select[name="checkout_monthday"]').value = "4"

document.querySelector('input[name="group_adults"]').value = 3
document.querySelector('input[name="group_children"]').value = 1
document.querySelector('input[name="no_rooms"]').value = 2

frm.submit()