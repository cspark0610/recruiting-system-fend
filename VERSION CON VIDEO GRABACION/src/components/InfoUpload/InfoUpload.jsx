import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import style from './InfoUpload.module.css';

export default function InfoUpload({ keys }) {
  const [cvFile, setCVFile] = useState(undefined);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [message, setMessage] = useState(undefined);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const inputFileRef = useRef(null);
  const checkBoxRef = useRef(null);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
  };

  const onSubmit = async (values) => {
    if (cvFile === undefined) {
      return setMessage('Debes seleccionar un archivo');
    }

    if (cvFile.type !== 'application/pdf') {
      setCVFile(undefined);
      return setMessage(
        'Solo archivos de tipo .pdf son soportados. Por favor elije otro',
      );
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('cv', cvFile);
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('country', values.country);

    try {
      const uploadResult = await axios.post('/candidate/create', formData, {
        headers: {
          'Content-Type': 'application/pdf',
        },

        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round(progressEvent.loaded * 100) / progressEvent.total,
            ),
          );
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });

      setIsUploading(false);
      navigate('/info-uploaded');
    } catch (e) {
      console.log(e);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    phone: Yup.number('Phone must be a number').required('Phone is required'),
    country: Yup.string().required('Country is required'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleChange = (e) => {
    setCVFile(e.target.files[0]);
  };

  const handleCVClick = () => {
    inputFileRef.current.click();
  };

  return (
    <div className={style.container}>
      <img
        src={require('../../assets/company-logo-small.png')}
        alt="fulltimeforce logo"
      />
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <p>Senior Designer</p>
        <section className={style.firstRow}>
          <input
            type="text"
            name="name"
            id="name"
            style={
              formik.touched && formik.errors.name
                ? { border: '2px solid red' }
                : null
            }
            required
            placeholder={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : 'Name'
            }
            {...formik.getFieldProps('name')}
          />
          <input
            type="email"
            name="email"
            id="email"
            style={
              formik.touched.email && formik.errors.email
                ? { border: '2px solid red' }
                : null
            }
            placeholder={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : 'Email'
            }
            required
            {...formik.getFieldProps('email')}
          />
        </section>
        <section className={style.secondRow}>
          <input
            type="tel"
            name="phone"
            id="phone"
            style={
              formik.touched.phone && formik.errors.phone
                ? { border: '2px solid red' }
                : null
            }
            placeholder={
              formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : 'Phone'
            }
            required
            {...formik.getFieldProps('phone')}
          />
          <select
            name="country"
            id="cuntry"
            style={
              formik.touched.country && formik.errors.country
                ? { border: '2px solid red' }
                : null
            }
            required
            {...formik.getFieldProps('country')}
          >
            <option value="">Select your country</option>
            <option value="Argentina">Argentina</option>
          </select>
          <label className={style.selectLabel}>Country</label>
        </section>

        {isUploading ? <ProgressBar progress={uploadPercentage} /> : null}

        <button
          className={style.cvUploadBtn}
          type="button"
          onClick={handleCVClick}
          style={
            (message && !cvFile) ||
            (message && cvFile.type !== 'application/pdf')
              ? { borderColor: 'red', color: 'red' }
              : null
          }
        >
          <FiUpload
            style={{
              fontSize: '20px',
              marginRight: '5px',
              marginBottom: '7px',
            }}
          />{' '}
          Upload CV
        </button>

        {(message && !cvFile) ||
        (message && cvFile.type !== 'application/pdf') ? (
          <h5 className={style.cvUploadError}>{message}</h5>
        ) : null}

        <input
          className={style.cvInput}
          type="file"
          ref={inputFileRef}
          onBlur={formik.handleBlur}
          onChange={handleChange}
        />
        <section className={style.termsSection}>
          <input
            className={style.checkbox}
            type="checkbox"
            name="terms"
            ref={checkBoxRef}
            id="terms"
          />
          <p className={style.termsText}>
            You must agree to <strong>terms and conditions</strong>{' '}
          </p>
        </section>

        <button className={style.submitBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
