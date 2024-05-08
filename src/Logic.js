import { Button, FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from './Style'
import { useNavigation } from '@react-navigation/native'


const Logic = () => {

  const navigation =  useNavigation()

    const [display, setDisplay] = useState(new Array(9).fill("empty", 0, 9))
    const [winner, setWinner] = useState("")
    const [cross, setCross] = useState(false)
    const [vissible, setVissible] = useState(false)
    const [matchNo, setmatchNo] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

    const reset = () => {
        setDisplay(new Array(9).fill("empty", 0, 9))
        setWinner("")
        setCross()
        setVissible(false)
    }

    const Tab = (index) => {
        setCross(!cross)

        if (matchNo[index] == index) {
            display[index] == "x" || display[index] == "o" ? setCross(cross) :
                cross ? display[index] = "x" : display[index] = "o"
        }
        else {
            setDisplay(new Array(9).fill("empty", 0, 9))
        }

        console.log("index", index)
        console.log("winner", winner)
        console.log("cross", cross)
        console.log("display", display)
        console.log("matchNo", matchNo[index])
        checkedWinner()
    }

    function checkedWinner() {
        if (display[0] != "empty" && display[0] === display[1] && display[0] === display[2]) {
            setWinner(`${display[0]} is win`)
            setVissible(true)
        } else if (display[3] != "empty" && display[3] === display[4] && display[3] === display[5]) {
            setWinner(`${display[3]} is win`)
            setVissible(true)
        } else if (display[6] != "empty" && display[6] === display[7] && display[6] === display[8]) {
            setWinner(`${display[6]} is win`)
            setVissible(true)
        } else if (display[0] != "empty" && display[0] === display[3] && display[0] === display[6]) {
            setWinner(`${display[0]} is win`)
            setVissible(true)
        } else if (display[1] != "empty" && display[1] === display[4] && display[1] === display[7]) {
            setWinner(`${display[1]} is win`)
            setVissible(true)
        } else if (display[2] != "empty" && display[2] === display[5] && display[2] === display[8]) {
            setWinner(`${display[2]} is win`)
            setVissible(true)
        } else if (display[0] != "empty" && display[0] === display[4] && display[0] === display[8]) {
            setWinner(`${display[0]} is win`)
            setVissible(true)
        } else if (display[2] != "empty" && display[2] === display[4] && display[2] === display[6]) {
            setWinner(`${display[2]} is win`)
            setVissible(true)
        } else if ( display[0] != "empty" &&
                    display[1] != "empty" &&
                    display[2] != "empty" &&
                    display[3] != "empty" &&
                    display[4] != "empty" &&
                    display[5] != "empty" &&
                    display[6] != "empty" &&
                    display[7] != "empty" &&
                    display[8] != "empty"
        ) {
            setWinner("draw the game")
            setVissible(true)
        } else {
            setWinner("")
            setVissible(false)

        }
    }

    return (
        <SafeAreaView className="flex-1 bg-cyan-300 justify-center items-center">
            <Pressable onPress={()=>navigation.goBack()}>
                <Text className="mr-80 text-red-400 text-xl font-semibold"> Go Back </Text>
            </Pressable>
            <View className="p-3">
                <Text className='text-3xl text-teal-700 font-bold font-sans'>Tic Tac Toe Game</Text>
            </View>
            <View className={cross ? turn.true : turn.false} style={Styles.Shadow}>
                <Text className="text-2xl font-bold text-white">{
                    cross ? "X" : "O"
                } 's Turn</Text>
            </View>
            <View className="mt-10 w-96 h-96 mb-10 flex flex-row flex-wrap rounded-md bg-emerald-600"
                style={styles.Shadow}
            >
                {
                    display.map((item, index) => {
                        return (
                            <>
                                <TouchableOpacity key={index} onPress={() => Tab(index)}
                                    className={item == "x" ? tail.true : item == "o" ? tail.false : tail.default} style={Styles.Shadow}>
                                    <Text className={item == "x" ? text.true : item == "o" ? text.false : text.default}>{item}</Text>
                                </TouchableOpacity>
                            </>
                        )
                    })
                }
            </View>

            <Pressable onPress={reset}
                className="w-full justify-center items-center bg-blue-500 h-10 -mb-5">
                <Text className="text-white text-xl">ReStart</Text>
            </Pressable>

            <Modal visible={vissible} transparent={true} animationType='slide'>
                <View className="w-full h-24 bg-cyan-500 justify-center items-center absolute bottom-0">
                    <Text className="text-2xl text-white mb-2">{winner}</Text>
                    <Pressable
                        onPress={reset}
                        className="w-full justify-center items-center bg-blue-500 h-10 -mb-5">
                        <Text className="text-white text-xl">ReStart</Text>
                    </Pressable>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default Logic

const styles = StyleSheet.create({})


const tail = {
    true: "w-24 h-24 mt-6 ml-6 rounded-lg justify-center items-center bg-purple-300",
    false: "w-24 h-24 mt-6 ml-6 rounded-lg justify-center items-center  bg-orange-300",
    default: "w-24 h-24 mt-6 ml-6 rounded-lg justify-center items-center  bg-cyan-200"
}

const text = {
    true: "text-5xl font-bold text-black",
    false: "text-5xl font-bold text-white",
    default: "text-md",
}

const turn = {
    true: "p-3 bg-purple-500 w-full justify-center items-center",
    false: "p-3 bg-yellow-500 w-full justify-center items-center"
}