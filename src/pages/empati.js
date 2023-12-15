import React from 'react';

import {createCard} from "./empati/components/card/CreateCard";

const EmpatiPage = () => (
    <>
    <div>Empati</div>
        {createCard('STAND_1', 'fjell')}
        {createCard('STAND_2', 'syrin')}
        {createCard('STAND_3', 'frost')}
        {createCard('STAND_4', 'sand', true)}
        {createCard('STAND_5', 'fjell')}
        {createCard('STAND_6', 'syrin')}
        {createCard('STAND_7', 'sand')}
    </>
);

export default EmpatiPage;