import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Radio,
  Select,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import Table from '../components/Table';

import { genders, loeOptions } from '../utils/constants';

import Users from '../helpers/requests/users';
import { userType, userWithId } from '../types/UserType';

import { uploadFileToCloudinary } from '../helpers/requests/cloudinary';

interface IFormInput {
  email: string;
  name: string;
  gender: string;
  dob: string;
  loe: string;
  password: string;
  confirmPassword: string;
  currentFile: File;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  name: yup.string().required().min(5).max(25),
  gender: yup.string().required('Select a gender'),
  loe: yup.string().required(),
  dob: yup.string().required(),
  password: yup.string().required().min(8).max(120),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  currentFile: yup.mixed().required('Profile pic is required'),
});

const tableHeaders: string[] = [
  'Name',
  'Email',
  'DoB',
  'Gender',
  'Level of education',
  'Profile Pic',
  'Actions',
];

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

function SignUp() {
  const { heading, submitButton } = useStyles();

  const [updating, setUpdate] = useState(false);

  const [file, setImage] = useState<File | undefined>();

  const [error, setError] = useState('');

  const [previewImage, setPreviewImage] = useState('');
  const [userId, setUid] = useState<string | number>('');

  const [users, setUsers] = useState<userWithId[]>([]);

  const initForm = {
    email: '',
    name: '',
    loe: '',
    gender: '',
    password: '',
    confirmPassword: '',
  };

  const [preloadedValue, setPreloaded] = useState(initForm);

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: preloadedValue,
    resolver: yupResolver(schema),
  });

  const updateUser = async (data: IFormInput) => {
    console.log('userId', userId);
    console.log('data', data);
  };

  const editAction = (user: userWithId) => {
    setUpdate(true);
    setPreloaded({
      email: user.email,
      name: user.name,
      loe: user.loe,
      gender: user.gender,
      password: user.password,
      confirmPassword: user.password,
    });
    setUid(user.id);
  };

  const cancelAction = () => {
    setUpdate(false);
    setPreloaded(initForm);
    setUid('');
  };

  const deleteAction = async (userId: string | number) => {
    console.log('userId :>> ', userId);
    // await Users.deleteUser(userId);
  };

  const createUser = async (data: IFormInput) => {
    const query = new URLSearchParams({ email: data.email }).toString();

    const emailExists = await Users.getUserByQuery(query);
    if (emailExists?.data?.length) {
      setError('Email already exists');
      return;
    }

    const { email, name, password, dob, loe, gender, currentFile } = data;
    let picUrl = await uploadFileToCloudinary(currentFile);
    const user = {
      name,
      email,
      dob,
      loe,
      gender,
      password,
      profilePic: picUrl,
    };

    await Users.createUser(user).catch((err) => setError(err.message));
    const allUsers = await Users.getAllUsers();
    setUsers(allUsers.data);
  };
  // differentButtons for edit and submit
  const onSubmit = async (data: IFormInput) => {
    setError('');
    return updating ? updateUser(data) : createUser(data);
  };

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setValue('currentFile', files[0]);
      setImage(files[0]);
      setPreviewImage(URL.createObjectURL(files[0]));
    }
  };

  useEffect(() => {
    Users.getAllUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    Users.getAllUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  // effect runs when user state is updated
  useEffect(() => {
    // reset form with user data
    reset(preloadedValue);
  }, [preloadedValue]);
  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">
        Sign Up Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register('email')}
          variant="outlined"
          margin="normal"
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          fullWidth
          required
        />
        <input type="date" placeholder="DOB" {...register('dob')} />
        {errors?.dob?.message && (
          <span style={{ color: 'red' }}>{errors?.dob?.message}</span>
        )}
        <TextField
          {...register('name')}
          variant="outlined"
          margin="normal"
          label="Name"
          helperText={errors.name?.message}
          error={!!errors.name?.message}
          fullWidth
          required
        />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="Female"
          {...register('gender')}
        >
          {genders.map((op, i) => (
            <FormControlLabel
              {...register('gender')}
              value={op}
              control={<Radio value={op} />}
              label={op}
              key={i}
            />
          ))}
        </RadioGroup>
        {
          <Select
            {...register('loe')}
            variant="outlined"
            label="Learning Outcome"
            error={!!errors.loe?.message}
            fullWidth
            required
            defaultValue={loeOptions[0]}
          >
            {loeOptions.map((option) => (
              <MenuItem {...register('gender')} key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        }
        <TextField
          {...register('password')}
          variant="outlined"
          margin="normal"
          label="Password"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          type="password"
          fullWidth
          required
        />
        <TextField
          {...register('confirmPassword')}
          variant="outlined"
          margin="normal"
          label="Confirm Password"
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword?.message}
          type="password"
          fullWidth
          required
        />

        <div className="mg20">
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              style={{ display: 'none' }}
              type="file"
              accept="image/*"
              onChange={selectFile}
              // {...register('currentFile')}
            />
            <Button className="btn-choose" variant="outlined" component="span">
              Choose Image
            </Button>
          </label>
          <div className="file-name">{file ? file.name : null}</div>

          {previewImage && (
            <div>
              <img
                width={200}
                className="preview my20"
                src={previewImage}
                alt=""
              />
            </div>
          )}
          {errors?.currentFile?.message && (
            <span style={{ color: 'red' }}>{errors?.currentFile?.message}</span>
          )}
        </div>
        {error.length > 0 && <p className="text-danger my-2 py-2">{error}</p>}

        {updating ? (
          <>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submitButton}
            >
              Update
            </Button>{' '}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={cancelAction}
              className={submitButton}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submitButton}
          >
            Sign Up
          </Button>
        )}
      </form>
      <div className="row">
        <Table
          headers={tableHeaders}
          data={users}
          editAction={editAction}
          deleteAction={deleteAction}
        ></Table>
      </div>
    </Container>
  );
}

export default SignUp;
