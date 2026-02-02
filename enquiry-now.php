                <div class="inquiry_popup">
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <h6 class="">Enquiry Now</h6>
                            <h5 class=""> Request a Call Back</h5>
                            <p>Need help or have any query? 
                                Don't hesitate, you can directly 
                                shoot us an <a href="mailto:info@paltradechem.com">email</a> or call us at <a href="tel:9974360621">9974360621</a></p>
                        </div>
                        <div class="offcanvas-body">
                            <div class="inquiry_form">
                                <div class="card contact-form">
                                    <form class="form-wrap" id="site-enq" autocomplete="on" method="post" enctype="multipart/form-data">
                                        <div class="row">
                                        <input type="hidden" name="site-enq" value="site-enq">
                                            <div class="col-md-12">
                                                <div class="input-wrap">
                                                    <label for="name">Name</label>
                                                    <input class="input" type="text" name="name" id="name" placeholder="First and Last name" value="" required/>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input-wrap">
                                                    <label for="mobile">Phone</label>
                                                    <input class="input" type="text" name="mobile" id="mobile" placeholder="Phone Number" value="" required />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input-wrap">
                                                    <label for="email">E-mail</label>
                                                    <input class="input" type="email" name="email" id="email" placeholder="email@mail.com" value="" required />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input-wrap">
                                                    <label for="subject">Subject</label>
                                                    <input class="input" type="text" name="subject" id="subject" placeholder="Subject" value="" required />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input-wrap textarea">
                                                    <label for="message">Describe</label>
                                                    <textarea class="input" name="message" id="message" placeholder="Write what you feel"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="g-recaptcha" data-sitekey="6LeyehAqAAAAAKlcneTf59PH0Er9bNG2VYXX6KTM" style="transform:scale(0.86);-webkit-transform:scale(0.86);"></div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-btm">
                                                    <button type="submit" class="page-btn site-link" name="Submit" id="button" data-hover="Submit"><span class="page-button">Submit</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <script>
                    $('.input').on("focus blur", function() {
                        if ($(this).val().length > 0 || $('.input').is(':focus')) {
                            $(this).siblings().addClass('active');
                            $(this).parent().addClass('active');
                        } else {
                            $(this).siblings().removeClass('active').addClass('not');
                            $(this).parent().removeClass('active').addClass('not');
                        }
                        if ($(this).val().length < 2 && $('.input').is(':focus') != true && $(this).is(':invalid') || $(this).is(':invalid') && $('.input').is(':focus') != true) {
                            $(this).parent().addClass('invalid');
                            $(this).siblings().addClass('invalid');
                        } else {
                            $(this).parent().removeClass('invalid');
                            $(this).siblings().removeClass('invalid');
                        }
                        if ($(this).val().length > 0 && $(this).is(':valid') && $('.input').is(':focus') != true) {
                            $(this).parent().addClass('valid');
                            $(this).siblings().addClass('valid');
                        } else {
                            $(this).parent().removeClass('valid');
                            $(this).siblings().removeClass('valid');
                        }
                    });
                </script>
              
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <script>
                    $("#site-enq").submit(function(a) {
                        a.preventDefault();
                        $("#btn-ajax").css("display", "inline-block"), $("#button").attr("disabled", true), $("#site-enq").serialize(), $.ajax({
                            url: "send-mail.php",
                            type: "POST",
                            data: new FormData(this),
                            mimeType: "multipart/form-data",
                            contentType: !1,
                            cache: !1,
                            processData: !1,
                            success: function(b) {             
                                if(b==true){
                                    console.log('Thanks');
                                    window.location.href = "thanks.html";
                                }else{
                                    alert(b);
                                    $("#button").attr("disabled", false);
                                }
                            }
                        })
                    });
                </script>
