import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


class Survey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userId: "1",
        email: "aldkj@lgkj.com",
        productsUsedDaily: "",
        favoriteColor: "",
        favoriteTexture: "",
        mealsCookedWeekly: "",
        materialChoice: "",
        roundedOrSquared: "",
        minimalistOrMaximalist: "",
        brightOrMuteTones: ""
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
  
    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    onSubmit(event) {
      event.preventDefault();
      let navigate = useNavigate();
      const url = "/api/v1/survey/create";
      const {userId, email, productsUsedDaily,
        favoriteColor,
        favoriteTexture,
        mealsCookedWeekly,
        materialChoice,
        roundedOrSquared,
        minimalistOrMaximalist,
        brightOrMuteTones } = this.state;
  
      if (productsUsedDaily.length == 0 ||
      favoriteColor.length == 0 ||
      favoriteTexture.length == 0 ||
      mealsCookedWeekly.length == 0 ||
      materialChoice.length == 0 ||
      roundedOrSquared.length == 0 ||
      minimalistOrMaximalist.length == 0 ||
      brightOrMuteTones.length == 0)
        return;
  
      const body = {
        userId, email, productsUsedDaily,
        favoriteColor,
        favoriteTexture,
        mealsCookedWeekly,
        materialChoice,
        roundedOrSquared,
        minimalistOrMaximalist,
        brightOrMuteTones
      };
  
      const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
              //response => this.context.history.push('/', response)
              //this.props.history.push("/");
              //this.props.history.push("/");
              
              return response.json();
          }
          throw new Error("Network response was not ok.");
        })
         //.then(this.context.history.push("/"))
         //.then(window.location.replace("/" + userId))
        .then(response => navigate("/", response))
        .catch(error => console.log(error.message));
        
        //this.context.history.push('/survey');
        //<Redirect to="/survey" />
        
    }
  
    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <h1 className="font-weight-light mb-5">
                Answer a couple questions and we'll personally curate a selection of products for you!
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <p>Which of these products do you use daily?</p>
                  <input
                    type="radio"
                    name="productsUsedDaily"
                    id="productsUsedDaily1"
                    required
                    value="KitchenUtensils"
                    onChange={this.onChange}
                  />
                  <label htmlFor="productsUsedDaily1">Kitchen Utensils</label>

                  <input
                    type="radio"
                    name="productsUsedDaily"
                    id="productsUsedDaily2"
                    required
                    value="SelfCareProducts"
                    onChange={this.onChange}
                  />
                  <label htmlFor="productsUsedDaily2">Self Care Products</label>

                  <input
                    type="radio"
                    name="productsUsedDaily"
                    id="productsUsedDaily3"
                    required
                    value="LuxuryFurniture"
                    onChange={this.onChange}
                  />
                  <label htmlFor="productsUsedDaily3">Luxury Furniture</label>
                </div> <br/>
                
                  <div className="form-group">
                  <p>Select a color for your pallete:</p>
                  <input
                    type="radio"
                    name="favoriteColor"
                    id="favoriteColor1"
                    required
                    value="Blue"
                    onChange={this.onChange}
                  />
                  <label htmlFor="favoriteColor1">Blue</label>

                  <input
                    type="radio"
                    name="favoriteColor"
                    id="favoriteColor2"
                    required
                    value="Yellow"
                    onChange={this.onChange}
                  />
                  <label htmlFor="favoriteColor2">Yellow</label>

                  <input
                    type="radio"
                    name="favoriteColor"
                    id="favoriteColor3"
                    required
                    value="Red"
                    onChange={this.onChange}
                  />
                  <label htmlFor="favoriteColor3">Red</label>
                  </div> <br/>

                  <div className="form-group">
                  <p>Pick a texture:</p>
                  <input
                    type="radio"
                    name="favoriteTexture"
                    id="favoriteTexture1"
                    required
                    value="Smooth"
                    onChange={this.onChange}
                  />
                  <label htmlFor="favoriteTexture1">Smooth</label>
                
                  <input
                    type="radio"
                    name="favoriteTexture"
                    id="favoriteTexture2"
                    required
                    value="Rough"
                    onChange={this.onChange}
                  />
                  <label htmlFor="favoriteTexture2">Rough</label>

                  <input
                    type="radio"
                    name="favoriteTexture"
                    id="favoriteTexture3"
                    required
                    value="InBetween"
                    onChange={this.onChange}
                  />
                  <label htmlFor="favoriteTexture3">Somewhere Inbetween</label>
                  </div> <br/>

                  <div className="form-group">
                  <p>How many meals do you cook at home weekly?</p>
                  <input
                    type="radio"
                    name="mealsCookedWeekly"
                    id="mealsCookedWeekly1"
                    required
                    value="0to5"
                    onChange={this.onChange}
                  />
                  <label htmlFor="mealsCookedWeekly1">0-5 Meals</label>
                
                  <input
                    type="radio"
                    name="mealsCookedWeekly"
                    id="mealsCookedWeekly2"
                    required
                    value="5to15"
                    onChange={this.onChange}
                  />
                  <label htmlFor="mealsCookedWeekly2">5-15 Meals</label>

                  <input
                    type="radio"
                    name="mealsCookedWeekly"
                    id="mealsCookedWeekly3"
                    required
                    value="15orMore"
                    onChange={this.onChange}
                  />
                  <label htmlFor="mealsCookedWeekly3">15+ Meals</label>
                  </div> <br/>

                  <div className="form-group">
                  <p>Pick a material you like:</p>
                  <input
                    type="radio"
                    name="materialChoice"
                    id="materialChoice1"
                    required
                    value="Velvet"
                    onChange={this.onChange}
                  />
                  <label htmlFor="materialChoice1">Velvet</label>
                
                  <input
                    type="radio"
                    name="materialChoice"
                    id="materialChoice2"
                    required
                    value="Burlap"
                    onChange={this.onChange}
                  />
                  <label htmlFor="materialChoice2">Burlap</label>

                  <input
                    type="radio"
                    name="materialChoice"
                    id="materialChoice3"
                    required
                    value="Cotton"
                    onChange={this.onChange}
                  />
                  <label htmlFor="materialChoice3">Cotton</label>
                  </div> <br/>

                  <div className="form-group">
                  <p>Do you like items that are rounded or squared?</p>
                  <input
                    type="radio"
                    name="roundedOrSquared"
                    id="roundedOrSquared1"
                    required
                    value="Rounded"
                    onChange={this.onChange}
                  />
                  <label htmlFor="roundedOrSquared1">Rounded</label>
                
                  <input
                    type="radio"
                    name="roundedOrSquared"
                    id="roundedOrSquared2"
                    required
                    value="Squared"
                    onChange={this.onChange}
                  />
                  <label htmlFor="roundedOrSquared2">Squared</label>
                  </div> <br/>

                  <div className="form-group">
                  <p>Do you consider yourself a minimalist or a maximalist?</p>
                  <input
                    type="radio"
                    name="minimalistOrMaximalist"
                    id="minimalistOrMaximalist1"
                    required
                    value="Minimalist"
                    onChange={this.onChange}
                  />
                  <label htmlFor="minimalistOrMaximalist1">Minimalist</label>
                
                  <input
                    type="radio"
                    name="minimalistOrMaximalist"
                    id="minimalistOrMaximalist2"
                    required
                    value="Maximalist"
                    onChange={this.onChange}
                  />
                  <label htmlFor="minimalistOrMaximalist2">Maximalist</label>
                  </div> <br/>

                  <div className="form-group">
                  <p>Do you prefer bright (vibrant) tones or mute (pastel) tones?</p>
                  <input
                    type="radio"
                    name="brightOrMuteTones"
                    id="brightOrMuteTones1"
                    required
                    value="Bright"
                    onChange={this.onChange}
                  />
                  <label htmlFor="brightOrMuteTones1">Bright</label>
                
                  <input
                    type="radio"
                    name="brightOrMuteTones"
                    id="minimalistOrMaximalist2"
                    required
                    value="Mute"
                    onChange={this.onChange}
                  />
                  <label htmlFor="brightOrMuteTones2">Mute</label>
                  </div> <br/>

                  <button type="submit" className="btn custom-button mt-3">
                  Start Survey
                </button>
              </form>
          </div>
      </div>
      </div>
      );
    }
  }

export default Survey;