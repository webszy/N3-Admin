import config from "@/config/websiteConfig"
export const  useSiteConfig = () => {
    return useState('siteConfig',()=>config)
}
