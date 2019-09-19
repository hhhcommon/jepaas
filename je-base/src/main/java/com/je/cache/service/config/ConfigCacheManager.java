package com.je.cache.service.config;

import com.je.cache.service.EhcacheManager;

import java.util.Map;

/**
 * 配置文件变量缓存
 */
public class ConfigCacheManager {
    /**
     * 获取缓存值
     * @param key 缓存键
     * @return
     */
    public static String getCacheValue(String key){
        String cacheName="configConfigCache";
        return (String) EhcacheManager.getCacheValue(cacheName, key);
    }
    /**
     * 添加缓存
     * @param key 缓存键
     * @param value 缓存值
     */
    public static void putCache(String key,String value){
        String cacheName="configConfigCache";
        EhcacheManager.putCache(cacheName, key, value);
    }
    /**
     * 清空所有缓存
     */
    public static void clearAllCache(){
        String cacheName="docConfigCache";
        EhcacheManager.clearAllCache(cacheName);
    }
    /**
     * 清空指定的缓存
     * @param key 缓存键
     */
    public static void removeCache(String key){
        String cacheName="configConfigCache";
        EhcacheManager.removeCache(cacheName, key);
    }

    /**
     * 获取所有cache值
     * @return
     */
    public static Map<String,Object> getCacheValues(){
        String cacheName="configConfigCache";
        return EhcacheManager.getAllCache(cacheName);
    }
}
