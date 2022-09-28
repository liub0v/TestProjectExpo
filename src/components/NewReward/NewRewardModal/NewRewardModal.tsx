import React, { useCallback, useState, FC } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import { useStyles } from "../../../hooks/useStyles";
import {
  DEVICE_WIDTH,
  ERROR,
  GRAY,
  INDENT,
  PRIMARY,
} from "../../../utils/constants";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { addFeed } from "../../../redux/dataSlice";
import { useUser } from "../../../hooks/useUser";
import { useData } from "../../../hooks/useData";

interface IValidationErrors {
  reward: string;
  message: string;
}
interface IValidationProps {
  reward: number;
  message: string;
}
interface INewRewardModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export const NewRewardModal: FC<INewRewardModalProps> = ({
  visible,
  onDismiss,
}) => {
  const dispatch = useDispatch();
  const { tileBackgroundColor, textColor } = useStyles();

  const [user, setUser] = useState(null);
  const { recievedValue } = useUser();
  const { users } = useData();

  const validate = ({
    message,
    reward,
  }: IValidationProps): IValidationErrors => {
    const errors = {} as IValidationErrors;
    if (!reward) {
      errors.reward = "Enter some value, please";
    }
    if (reward > recievedValue) {
      errors.reward = "You don't have enough money";
    }
    if (!message || message.length === 0) {
      errors.message = "Message cannot be empty";
    }
    return errors;
  };

  const onSend = useCallback(
    ({ userId, message, reward }) => {
      console.log(userId, message, reward);
      dispatch(
        addFeed({
          userId,
          message,
          reward,
        })
      );
      onDismiss();
    },
    [dispatch, onDismiss]
  );

  return (
    <Modal
      avoidKeyboard
      deviceWidth={DEVICE_WIDTH}
      isVisible={visible}
      onDismiss={onDismiss}
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
      useNativeDriver={true}
      style={styles.modal}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.container, tileBackgroundColor]}>
          <Formik
            validate={validate}
            initialValues={{ reward: null, userId: user, message: null }}
            onSubmit={onSend}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
              errors,
              touched,
            }) => (
              <View style={styles.formContainer}>
                <Text
                  style={[styles.title, { fontSize: INDENT.XL }, textColor]}
                >
                  {`Give reward to:`}
                </Text>
                <Picker
                  style={{ width: "100%" }}
                  itemStyle={[{ fontSize: 18, color: PRIMARY }]}
                  selectedValue={user}
                  prompt={"Colleagues"}
                  onValueChange={(itemValue) => {
                    setFieldValue("userId", itemValue);
                    setUser(itemValue);
                  }}
                >
                  {users.map((user) => {
                    return (
                      <Picker.Item
                        key={user.id}
                        label={`${user.firstName} ${user.lastName}`}
                        value={user.id}
                      />
                    );
                  })}
                </Picker>
                <View style={styles.inputWrapper}>
                  <Text style={[styles.title, textColor]}>Reward</Text>
                  <TextInput
                    keyboardType='numeric'
                    placeholder='30$'
                    onChangeText={handleChange("reward")}
                    value={values.reward}
                    style={[styles.textInput, textColor]}
                  />
                  {errors.reward && touched.reward && (
                    <Text style={{ color: ERROR }}>{`${errors.reward}`}</Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={[styles.title, textColor]}>Message</Text>
                  <TextInput
                    numberOfLines={3}
                    placeholder='Thank you for help!'
                    onChangeText={handleChange("message")}
                    value={values.message}
                    style={[styles.textInput, textColor]}
                  />
                  {errors.message && touched.message && (
                    <Text style={{ color: ERROR }}>{`${errors.message}`}</Text>
                  )}
                </View>
                <View style={styles.buttonsContainer}>
                  <Button
                    onPress={() => handleSubmit()}
                    title='Submit'
                    color={PRIMARY}
                  ></Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
  },
  container: {
    minHeight: "60%",
    width: DEVICE_WIDTH,
    borderTopStartRadius: INDENT.L,
    borderTopEndRadius: INDENT.L,
    paddingTop: INDENT.XL,
    paddingBottom: INDENT.L,
    paddingHorizontal: INDENT.XL,
  },
  formContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: INDENT.L,
    fontWeight: "500",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: INDENT.S,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: INDENT.S,
  },
  textInput: {
    marginTop: INDENT.M,
    height: 40,
    width: "100%",
    borderColor: GRAY,
    borderWidth: 1,
    minHeight: 40,
    borderRadius: INDENT.S,
    paddingHorizontal: INDENT.S,
  },
});
