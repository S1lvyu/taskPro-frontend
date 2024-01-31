import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../Modal/Modal';
import { EditProfileForm } from '../EditProfileForm/EditProfileForm';
import { getUser } from '../../../redux/selectors';
import defaultPhoto from '../../../assets/svg/symbol-defs.svg';
import css from './UserInfo.module.css';

export const UserInfo = () => {
  const user = useSelector(getUser);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  return (
		<div>
			<div className={css.user} onClick={handleEditClick}>
				<h2 className={css.user__name}>{user.name || "Profile"}</h2>
				<div className={css.photo}>
					{user?.avatar ? (
						<img className={css.photo__img} src={user.avatar} alt="avatar" />
					) : (
						<svg className={css.svg} width={32} height={32}>
							<use href={defaultPhoto + "#icon-Group-1456q"} />
						</svg>
					)}
				</div>
			</div>

			{showEditForm && (
				<Modal handleClose={handleCloseForm}>
					<EditProfileForm user={user} onClose={handleCloseForm} />
				</Modal>
			)}
		</div>
	);
};
