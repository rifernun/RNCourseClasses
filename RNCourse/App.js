import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); //Return all objectives except the ID objective, which will be deleted.
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#914ee9ff"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            // necessary for run the items in flatList (array/list)
            data={courseGoals}
            // children is here (arrow function for simple "map" the items in array and do something)
            renderItem={(itemData) => {
              //necessary to take the elements in array itemData
              itemData.index;
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            //get keys in array object with 2 params in the array function (item, index)
            keyExtractor={(item, index) => {
              return item.id;
            }}
            //only for iOS, just for remove a unnecessary scroll
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
