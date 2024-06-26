package cn.fighter3.vo;

import cn.fighter3.entity.User;

import java.io.Serializable;

/**
 * @Author: ***
 * @Date:  * @Author: 2023/6/4
 * @Description: 登录VO
 **/

public class LoginVO implements Serializable {
    private Integer id;
    private String token;
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
