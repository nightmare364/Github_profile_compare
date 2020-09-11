import React from "react";
import "./index.css";
import { Card, Icon, Image } from 'semantic-ui-react';


const CreateCard = (props) =>{
    var ordinal = require('ordinal')
    return (
        <div className="card">
                <Card>
                    <Image src={props.avatar} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{ordinal(props.id+1)} {props.Name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <a href={props.userurl}> 
                            <Icon name='user' />
                            {props.userName}
                        </a>
                    </Card.Content>
                    <Card.Content extra>{props.followers} followers</Card.Content>
                    <Card.Content extra>{props.following} following</Card.Content>
                    <Card.Content extra>{props.repos} repos</Card.Content>
                </Card>
        </div>
    );
};

export default CreateCard;