import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import R from '../../assets/R';
import HomeView from './HomeView';
import {showAlert, TYPE} from '../../components/DropdownAlert/index';
import {
    TIMETABLE,
    RESULTGRADE,
    EXAMCALENDAR,
    FINACE,
    REGISTERSUBJECT,
    SERVEY,
    EVALUATE,
    CURRICULUM,
    GRADUATION,
} from '../../routers/ScreenNames';

const Home = (props) => {
    return <HomeView />;
};

export default Home;
