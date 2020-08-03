import React, { useState, useEffect } from 'react';
import { Modal } from './modal';

export const withErrorHandler = (WrapperdComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req
        })
        const resInterceptor = axios.interceptors.response.use(res => res,
            error => {
                setError(error)
            }
        )

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        }, [reqInterceptor, resInterceptor])
        return (
            <React.Fragment>
                <Modal show={error}>
                    {error && error.message ? error.message : null}
                </Modal>
                <WrapperdComponent {...props} />
            </React.Fragment>
        )
    }
}