import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      console.log("야야야");
      history.push("/");
    }
    console.log(location.state);
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <div>
            {location.state.name}의 최고온도 : {location.state.info.temp_max}
          </div>
          <div>
            {location.state.name}의 최저온도 : {location.state.info.temp_min}
          </div>
          <div>
            {location.state.name}의 체감온도 : {location.state.info.feels_like}
          </div>
        </div>
      );
    } else {
      console.log("error");
      return null;
    }
  }
}
export default Detail;
