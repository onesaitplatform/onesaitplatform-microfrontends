/**
 * @typedef {Object} UserResponse
 * @property {object} user - The logged user
 */

/**
 * Controller for the POST login service. This method performs the request regarding the configuration and
 * parameters passed as arguments and returns an object containing the logged user
 * @param {form} body    - user form data
 * @return {UserResponse} - An object containing the list of Dashboards
 */


interface Body {
  username: string;
  password: string;
}

interface LoginConfig {
  url: string;
  endpoint: string;
  storage: string;
  tokenName: string;
  productName: string;
  redirect: string;
}

interface ResponseData {
  token: string;
  "token-type": string;
  "expires-in": number;
}

export const login = async (body: Body, loginConfig: LoginConfig) => {
  try {
    const response = await fetch(`${loginConfig.url}${loginConfig.endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data: ResponseData = await response.json()
    const storage: string = loginConfig.storage
    if (storage === 'sessionStorage') {
      sessionStorage[loginConfig.tokenName] = data.token
    } else if (storage === 'localStorage') {
      localStorage[loginConfig.tokenName] = data.token
    } else {
      document.cookie = `${loginConfig.tokenName}=${data.token}`
    }
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
export const logout = (loginConfig: LoginConfig) => {
  const storage: string = loginConfig.storage
  if (storage === 'sessionStorage') {
    sessionStorage[loginConfig.tokenName] = null
  } else if (storage === 'localStorage') {
    localStorage[loginConfig.tokenName] = null
  } else {
    document.cookie = `${loginConfig.tokenName}=`
  }
}

export default {
  login,
  logout
}