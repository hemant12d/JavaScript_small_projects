<?php include 'header.php'; ?> 

    <!-- Contact Us Section is starting from here -->
    <section class="contact-us mt-4">
        <div class="container">
            <div class="content">

                      <!-- Contect Form Intro Start -->
                <div class="form-intro-content">
                    <div class="intro-line text-center">
                        <h1 class="intro">Join Us Today</h1>
                    </div>
                    <div class="fill-form text-center mt-4">
                        <h1 class="intro-form">Fill From to Contact Us</h1>
                    </div>
                </div>
                      <!-- Contect Form Intro End -->

                      <!-- Context Form Start -->
                <div class="form-contact">
                    <div class="row plr">
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <label for="fname" class="my-1 fs-6 fw-200">Enter First Name: </label>
                            <input type="text" id="fname" class="form-control" placeholder="Virat *"
                                aria-label="First name">
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <label for="lname" class="my-1 fs-6 fw-200">Enter Last Name: </label>
                            <input type="text" id="lname" class="form-control" placeholder="Kohli *"
                                aria-label="Last name">
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <label for="email" class="my-1 fs-6 fw-200">Enter Email</label>
                            <input type="email" id="email" class="form-control" placeholder="example@gmail.com *"
                                aria-label="email">
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <label for="contact-no" class="my-1 fs-6 fw-200">Contact No.</label>
                            <input type="text" id="contact-no" class="form-control" placeholder=" 0987654321"
                                aria-label="Contact-No">
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <label for="city" class="my-1 fs-6 fw-200">Enter City</label>
                            <input type="text" id="city" class="form-control" placeholder="Bhilwara *"
                                aria-label="city">
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <label for="hobbies" class="my-1 fs-6 fw-200">Enter Hobbies</label>
                            <input type="text" id="hobbies" class="form-control" placeholder="Singing, Dancing *"
                                aria-label="hobbies">
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12">
                                    <label for="state" class="fs-6 fw-200">Enter State</label>
                                    <input type="text" id="state" class="form-control" placeholder="Rajasthan *"
                                        aria-label="state">
                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12" id="pincode-hold">
                                    <label for="pin-code" class="fs-6 fw-200">Enter Pin Code</label>
                                    <input type="text" id="pin-code" class="form-control" placeholder="01482 *"
                                        aria-label="pin-code">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3" id="pincode-hold">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="stream-field select-field">
                                        <label for="stream">Select Stream</label>
                                        <div class="stream-content stream-option-design">
                                            <select id="stream" name="stream" class="stream-option">
                                                <option value="sci">Science</option>
                                                <option value="com">Commerce</option>
                                                <option value="art">Art</option>
                                                <option value="none-of-them">None of them</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="board-field select-field">
                                        <label for="board">Select Board</label>
                                        <div class="stream-content stream-option-design">
                                            <select id="board" name="board" class="stream-option">
                                                <option value="rbse">RBSE</option>
                                                <option value="cbse">CBSE</option>
                                                <option value="none-of-them">None of them</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 ">
                                    <div class="best-course-field select-field">
                                        <label for="course">Best Course</label>
                                        <div class="stream-content stream-option-design">
                                            <select id="course" name="course" class="stream-option">
                                                <option value="iit">IIT</option>
                                                <option value="upsc">UPSC</option>
                                                <option value="ca">CA</option>
                                                <option value="b-tech">B-Tech</option>
                                                <option value="neet">NEET</option>
                                                <option value="jet">JET</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 ">
                                    <div class="popular-course-field select-field">
                                        <label for="pcourse">Popular Course</label>
                                        <div class="stream-content stream-option-design">
                                            <select id="pcourse" name="pcourse" class="stream-option">
                                                <option value="iit">IIT</option>
                                                <option value="upsc">UPSC</option>
                                                <option value="ca" selected>CA</option>
                                                <option value="neet">NEET</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-12 col-sm-12 col-xs-12 my-3">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 ">
                                    <div class="type-course-field select-field">
                                        <label for="course-type">Course Type</label>
                                        <div class="stream-content stream-option-design">
                                            <select id="course-type" name="course-type" class="stream-option">
                                                <option value="on">Online</option>
                                                <option value="off">Offline</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 ">
                                    <div class="categary-course-field select-field">
                                        <label for="course-plan">Course Categary</label>
                                        <div class="stream-content stream-option-design">
                                            <select id="course-plan" name="pcourse" class="stream-option">
                                                <option value="b-l">Basic</option>
                                                <option value="a-l">Advace</option>
                                                <option value="p-a-l">Pro-Advance</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-submit mt-3">
                            <button type="button" class="submit-button">Submit Details</button>
                        </div>
                    </div>
                </div>
                <!-- Context Form End -->
            </div>
        </div>
    </section>
    <!-- Contact Us Section is ending from here -->


    <!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
</body>

</html>