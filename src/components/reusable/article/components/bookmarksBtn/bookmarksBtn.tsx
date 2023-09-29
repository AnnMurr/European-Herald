import { IconBtn } from "../../../iconBtn/iconBtn";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { Inner } from "./styledBookmarksBtn";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store/store";
import { changeUserData } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookmarksBtn = ({ dataCard }: any) => {
    const dispatch = useAppDispatch()
    const dataUserFromRedux = useAppSelector((state) => state.user.userData)
    const { articlename } = useParams()
    const [addedToBookmarks, setAddedToBookmarks] = useState<boolean>(false)

    const addArticleToBookmarks = () => {
        if (dataUserFromRedux) {
            dispatch(changeUserData({
                ...dataUserFromRedux,
                bookmarks: [...(dataUserFromRedux?.bookmarks || []), dataCard]
            }))
        }
    }

    useEffect(() => {
        if (dataUserFromRedux?.bookmarks) {
            if (dataUserFromRedux.bookmarks.some((bookmark) => bookmark.uri === articlename)) {
                setAddedToBookmarks(true)
            } else {
                setAddedToBookmarks(false)
            }
        }
    }, [dataUserFromRedux])

    return (
        <Inner>
            <IconBtn onClickFunc={addArticleToBookmarks} icon={addedToBookmarks ? faBookmarkSolid : faBookmark} size={"lg"} />
        </Inner>
    )
}