import axios from 'axios';
import React from 'react';
class Lunch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []

        };
    }

    componentDidMount() {


        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/5')
            .then(res => {
                // handle result
                this.setState({
                    menuItems: res.data

                })
                console.log(res)
            })

    };

    render() {
        console.log(this.state.menuItems)
        var min = 10;
        var max = 20;
        

        return (
            <div>
                <h3>For Lunch:</h3>
                {this.state.menuItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>
                                {item.name} - ${Math.floor(min + (Math.random() * (max - min)))}
                            </h4>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Lunch;