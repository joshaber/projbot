const {createProbot} = require('probot')

const bot = createProbot({
  id: "14279",
  secret: "deadbeef",
  cert: `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEApC/JsrtiIntV8QrtG3Pwld/iqNXM7o5uzg2qo/ETtTWOqIN7
Fxb3YR55AL+IfqC49yaEn3rd4wq/BvRbn9wYAny78+AfOxpRlQtpw73R9qG32MsY
CjdTLQrHmcszaEso67afeI66zjoUJMdnS1vdFoCAeFK8FjWh6hXwC7PAJDwB6p1Y
e6m/+hjnziXgHOg/upBykM7EypcvRkKhvmlFjjKM/9pCCzVIkw9838xgsiXOquJR
cMEO+E+nOOdNk57SrRSDL7L2S0O3epCvR2rrMGE0sJsiDMCYLWj6EZTrSt4kKUG9
mgBfgvntBCq/sZD1VDScYitf8FDca9dkO/oGuwIDAQABAoIBAQCCMgbufVsPXuBC
mVh2WZThND1nhsrQLRA+w2WaRTRMkODETibQo3ydfe2UI03YpBiom9m1IVhMjxv2
JtV1SbGcX08nz4TUeEVTPE6tUpvpyEmiV0KD72U8pXysPw9P17HmYNXKYtxNZo7M
r3cAsiL6kgHN6EWQEw2HM8g7b1mhINM/yF0Y729Xat8rhOd0iGPYsDj+HH9tdYSx
TYueiR7NXk8LVQuw7NwZh0cjbWjX2AkUk1S/SPmjuHZ2J3xWD3CCreYk4PkNryZo
L1eX04OaOa3jVHbJDkjOFQ9O+Eu7z+wxJm0rQr3936CwJPVi5HF+5/tYR0jVABIq
40Sy7hxZAoGBANTSgdKbDLFcSCQfbgDXveKNI80RCZsjyA5GFMkAr7B7I8slsdc8
zy4ejtn5H2UML6C53SZzF+C+UOjay8y1NgRixhnA6IvOMM1dDZL9ZCspSAOihrcy
nAYZ+YxLClw9/NCpuI1NHNjW2lheIjmZMOt31X/jBzyqd308zgdRs8KvAoGBAMV/
QpjAnc3y0BOnhqHAgPdiyuC1SLHIPgH/S9EgBlpCpvlUqZeKHdz8g0X88Yq7ov6G
jV7g4mvVMEsioEbY9ltgKTdlOo1U+uUTBqGYmwkpHbaQkC2QpXmn5qu/5KCiue2K
CPzTNjU8xc+nSoolJ3EPIHdJZnJBUVHFOUF04O+1AoGBALxBib02kj/Blb7+Xlw4
eyuQFf8r9wdY23pk27YB+WdvRfZJXcs7azkspsiB6heEdA0E3G9Kl/Ch6QhRor1t
/l5a0UmurwYcWmcOzRcdNiJH3f/5IJmlFwb+qxRCvONjoeMifrHfaIkXZQWOH1A8
Bl4EHsOFm706PYB27PjkeNLZAoGBALWKX1suY2A2fJI0ggsZevLr+vVHboUNPgJz
++tFdtFtRzMVYbcMnJrP+pNRCW6vQAqbAERgj4DzvKq0L4QwV3RzFi/3ezUDEoWT
UZslPg3Tn557kCxyM8l6Tw09HRmTuzjgk5ZjSAbz0Bkq+9e0g2bnsr4z2FnaNLfn
hNPobgOpAoGAPrhjXtCd6/nf9l4XHetmftSvIm0ohcnDwaj9bBzSQ+Y+9oKjC0+V
NiCB68KQ3amPhPkotEJQSImPsOAbWFFzpieLywtUJOx5oWDBM7uSVOhZtR7bu3Zw
mWuck1t4SHHn4nzzC8UH/VVWh/DVro3nyGlOlnX8il46Oc32FikrWlw=
-----END RSA PRIVATE KEY-----
`
}) 

const main = app => {
  console.log('here!')

  // app.on("pull_request.opened", async context => {
  //   console.log(`hey there ${context}`)
  //   app.log(`hey there ${context}!!`)
  // })
}

exports.main = (req, res) => {
  console.log('hey there!')
  console.log(`${req.body}`)
  for (let key of Object.keys(req.body)) {
    console.log(`${key}: ${req.body[key]}`)
  }
  res.send('cool')
}
