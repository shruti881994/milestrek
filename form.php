 <div class="trek_form">
          <form>
            <fieldset>
    <legend class="text-center">Trek Details</legend>
  </fieldset>
            <div class="form-group">    
              <input type="email" class="form-control" id="email" placeholder="Your Name">
            </div>
            <div class="form-group">    
              <input type="email" class="form-control" id="email" placeholder="Your Phone">
            </div>
            <div class="form-group">    
              <input type="email" class="form-control" id="email" placeholder="Your email">
            </div>
            <div class="form-group">    
              <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
              <select class="custom-select" id="inputGroupSelect04">
                <option selected>Choose Trek</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group">    
                <input type="text" class="form-control date" id="date" placeholder="Schedule your Dates">
                
            </div>
            
            <a href="" class="btn btn-primary my-2 my-sm-0">Book Now</a>
          </form>
        </div>
        <div class="query mt-5">
          <h3>Have any question</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
          <a href=""><i class="fa fa-phone" aria-hidden="true"></i> 9898989889</a><br>
          <a href=""><i class="fa fa-envelope" aria-hidden="true"></i> support@gmail.com</a>
        </div>

        
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
  <script type="text/javascript">

      $('.date').datepicker({
   multidate: true,
  minDate: 0,
  dateFormat: "dd/mm/yy",
  todayHighlight: true,
  autoclose: true,
  startDate: '-2d',

});
     $("#reset-date").click(function(){
    $('#date').datepicker("update");
})
  

  </script>