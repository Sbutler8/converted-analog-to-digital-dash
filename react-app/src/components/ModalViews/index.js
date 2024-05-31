import { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import ProfilePictures from "../ProfilePictures";
import ChooseCar from "../ChooseCar";
import AddCarForm from "../AddCarForm";

function ModalViews({
  showProfileModal,
  setShowProfileModal,
  showCarModal,
  setShowCarModal,
}) {
  // const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  // const [showCarModal, setShowCarModal] = useState(false);
  const [showAddCarModal, setShowAddCarModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <>
      {showProfileModal && (
        <Modal onClose={() => setShowProfileModal(false)} name="profile">
          <ProfilePictures
            setShowProfileModal={setShowProfileModal}
            setShowLoginModal={setShowLoginModal}
            setSelectedUser={setSelectedUser}
            setShowSignupModal={setShowSignupModal}
          />
        </Modal>
      )}
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} name="login">
          <LoginForm
            setShowLoginModal={setShowLoginModal}
            selectedUser={selectedUser}
            showCarModal={showCarModal}
            setShowCarModal={setShowCarModal}
            setShowProfileModal={setShowProfileModal}
          />
        </Modal>
      )}
      {showCarModal && (
        <Modal onClose={() => setShowCarModal(false)} name="car">
          <ChooseCar
            setShowCarModal={setShowCarModal}
            setShowAddCarModal={setShowAddCarModal}
          />
        </Modal>
      )}
      {showAddCarModal && (
        <Modal onClose={() => setShowAddCarModal(false)} name="addCar">
          <AddCarForm setShowAddCarModal={setShowAddCarModal} />
        </Modal>
      )}
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)} name="signup">
          <SignUpForm
            setShowSignupModal={setShowSignupModal}
            setShowAddCarModal={setShowAddCarModal}
          />
        </Modal>
      )}
    </>
  );
}

export default ModalViews;
