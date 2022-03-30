package com.luv2code.ecommerce.config;

import java.io.IOException;


import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.stereotype.Component;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class MyBasicAuthenticationEntryPoint extends BasicAuthenticationEntryPoint {

    @Override
    public void commence(
      HttpServletRequest request, HttpServletResponse response, AuthenticationException authEx) 
      throws IOException {
        response.addHeader("WWW-Authenticate", "Basic realm=" + getRealmName() + "");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.sendError(0, getRealmName()+ authEx.getMessage());

    }

    @Override
    public void afterPropertiesSet() {
        setRealmName("HTTP Status 401 UNAUTHORIZED - ");
        super.afterPropertiesSet();
    }
}