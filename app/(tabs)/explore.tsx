import { View, Text } from 'react-native'
import React from 'react'
import { Link, Tabs } from 'expo-router'

const Explore = () => {
  return (
    <View >
        <Link href={'/(modals)/login'}>Login</Link>
        <Link href={'/(modals)/booking'}>Booking</Link>
        <Link href={'/listing/1997'}>Detail</Link>

    </View>
  )
}

export default Explore