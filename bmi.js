

        function ClearForm(form) {

           
            form.ele.value = "";
            form.electronic.value = "";
       

        }

        function electronic(ele) {

            money = ele * 2000;
            return money;
        }

        function checkform(form) {

            if ( form.ele.value == null || form.ele.value.length == 0) {
                alert("\nVui lòng nhập đầy đủ thông tin về số lượng điện tiêu thụ (kw)");
                return false;
            }

            else if (parseFloat(form.ele.value) <= 0) {
                alert("\nBạn đã nhập không đúng.Vui lòng nhập đầy đủ thông tin về số lượng điện tiêu thụ (kw)");
                ClearForm(form);
                return false;
            }
            return true;

        }

        function computeform(form) {

            if (checkform(form)) {

                yourmoney = (electronic(form.ele.value));
                form.electronic.value = yourmoney;

                if (yourbmi >= 40) {
                    form.my_mess.value = "Bạn bị béo phì độ III !";
                }

                else if (yourbmi >= 35 && yourbmi < 40) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị béo phì độ II !";
                }

                else if (yourbmi >= 30 && yourbmi < 35) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị béo phì độ I";
                }

                else if (yourbmi >= 25 && yourbmi < 30) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị thừa cân !";
                }

                else if (yourbmi >= 18.5 && yourbmi < 25) {
                    form.my_mess.value = "Chúc mừng bạn ! Bạn có chỉ số BMI bình thường !";
                }

                else if (yourbmi >= 17 && yourbmi < 18.5) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị gầy độ I !";
                }

                else if (yourbmi >= 16 && yourbmi < 17) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị gầy độ II ! ";
                }

                else if (yourbmi < 16) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị gầy độ III ! ";
                }

            }
            return;
        }
    