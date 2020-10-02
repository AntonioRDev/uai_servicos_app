import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283c73",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 50,
    paddingHorizontal: 1,
  },
  imageCtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emailCtn: {
    paddingHorizontal: 30,
  },
  label: {
    color: "#283c73",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#bababa",
    marginBottom: 6,
  },
  passwordCtn: {
    paddingHorizontal: 30,
  },
  signInCtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 10,
    backgroundColor: "#283c73"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  footerCtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  forgotPass: {
    color: "#bababa",
    fontWeight: "bold",
    fontSize: 16,
  },
  register: {
    color: "#283c73",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
